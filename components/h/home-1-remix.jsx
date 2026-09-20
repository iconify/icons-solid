import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsxl87bvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bsxl87bvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:home-1-remix"} {...others} />);
}

export default Component;
