import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhvvn0bca.css';
import '../../css/j/jdrr3im4g.css';
import '../../css/j/j1qa98x7n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hhvvn0bca"/><path class="jdrr3im4g"/><path class="j1qa98x7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-virus"} {...others} />);
}

export default Component;
