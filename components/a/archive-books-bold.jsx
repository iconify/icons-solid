import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey-ae8pml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ey-ae8pml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:archive-books-bold"} {...others} />);
}

export default Component;
