import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk79hlb8i.css';
import '../../css/n/ncm2tvj9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lk79hlb8i"/><path class="ncm2tvj9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:folder-share-bold"} {...others} />);
}

export default Component;
