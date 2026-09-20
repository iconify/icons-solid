import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj5kz30al.css';
import '../../css/n/nj0ynib6i.css';
import '../../css/r/r_993qgax.css';
import '../../css/u/ume3owb3n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bj5kz30al"/><path class="nj0ynib6i"/><path class="r_993qgax"/><path class="ume3owb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:dart"} {...others} />);
}

export default Component;
