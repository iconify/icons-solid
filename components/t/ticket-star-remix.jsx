import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9twe9r7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o9twe9r7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ticket-star-remix"} {...others} />);
}

export default Component;
