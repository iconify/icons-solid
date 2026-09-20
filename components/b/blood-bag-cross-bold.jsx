import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o300w3m6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o300w3m6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blood-bag-cross-bold"} {...others} />);
}

export default Component;
