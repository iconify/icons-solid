import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrswr37-c.css';
import '../../css/i/inewx5b5l.css';
import '../../css/a/apsjv3qau.css';
import '../../css/f/ftoxqwbpl.css';
import '../../css/w/w6g5yhqkl.css';
import '../../css/a/adfwhub6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="qrswr37-c"/><circle class="inewx5b5l"/><circle class="apsjv3qau"/><circle class="ftoxqwbpl"/><circle class="w6g5yhqkl"/><circle class="adfwhub6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:grip-vertical"} {...others} />);
}

export default Component;
