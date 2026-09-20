import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj59mebze.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zj59mebze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:credit-card-2-remix"} {...others} />);
}

export default Component;
