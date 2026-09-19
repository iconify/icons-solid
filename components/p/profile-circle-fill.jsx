import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg3ev6byy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gg3ev6byy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:profile-circle-fill"} {...others} />);
}

export default Component;
