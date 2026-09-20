import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_p24o3jy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z_p24o3jy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:user-feedback-heart-solid"} {...others} />);
}

export default Component;
