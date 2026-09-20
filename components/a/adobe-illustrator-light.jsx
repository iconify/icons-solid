import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj3tnhbbf.css';
import '../../css/k/k-_e98l6u.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="hj3tnhbbf"/><path class="k-_e98l6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:adobe-illustrator-light"} {...others} />);
}

export default Component;
