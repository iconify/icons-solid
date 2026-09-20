import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5x9ex2ab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5x9ex2ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:relation-only-one-to-zero-or-one"} {...others} />);
}

export default Component;
