import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytgae-raz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ytgae-raz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-minus-square-fill"} {...others} />);
}

export default Component;
