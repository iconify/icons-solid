import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icd4gjbhu.css';
import '../../css/a/acxbn7rlj.css';
import '../../css/u/u6o085bnm.css';
import '../../css/q/q2j8-gpwc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="icd4gjbhu"/><path class="acxbn7rlj"/><path class="u6o085bnm"/><circle class="q2j8-gpwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:opa"} {...others} />);
}

export default Component;
