import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqfy24bla.css';
import '../../css/i/ijmbz5bch.css';
import '../../css/u/u1ktodbsw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aqfy24bla"/><path class="ijmbz5bch"/><path class="u1ktodbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:drag"} {...others} />);
}

export default Component;
