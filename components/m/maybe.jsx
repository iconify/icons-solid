import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lc25svfcp.css';
import '../../css/j/jly7v7-2j.css';
import '../../css/f/f_km3v9ni.css';
import '../../css/a/afby5gqzh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lc25svfcp"/><path class="jly7v7-2j"/><path class="f_km3v9ni"/><path class="afby5gqzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:maybe"} {...others} />);
}

export default Component;
