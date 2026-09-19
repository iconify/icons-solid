import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5qc9eivb.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="b5qc9eivb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:transgender-alt"} {...others} />);
}

export default Component;
