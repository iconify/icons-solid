import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7doqub5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e7doqub5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:refrigerator-solid"} {...others} />);
}

export default Component;
