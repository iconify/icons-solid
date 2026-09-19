import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqq3jn0yy.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="eqq3jn0yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:assistive-listening-systems"} {...others} />);
}

export default Component;
