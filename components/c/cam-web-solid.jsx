import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pri320nxf.css';
import '../../css/h/hana-fm8g.css';
import '../../css/b/b6ymlcrjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="pri320nxf"/><circle class="hana-fm8g"/><path class="b6ymlcrjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cam-web-solid"} {...others} />);
}

export default Component;
