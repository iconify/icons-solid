import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlh38yb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlh38yb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:profile-delete-filled"} {...others} />);
}

export default Component;
