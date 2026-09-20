import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9hn-4--c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o9hn-4--c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:copy-fill"} {...others} />);
}

export default Component;
