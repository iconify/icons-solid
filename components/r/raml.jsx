import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf0kz77ab.css';
import '../../css/o/o1_egw1bm.css';
import '../../css/n/nuw157b1i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rf0kz77ab"/><rect class="o1_egw1bm"/><rect class="nuw157b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:raml"} {...others} />);
}

export default Component;
