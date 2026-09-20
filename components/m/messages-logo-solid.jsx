import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6nf6mb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o6nf6mb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:messages-logo-solid"} {...others} />);
}

export default Component;
