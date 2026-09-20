import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_p0phbue.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h_p0phbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:watch-square-disable-remix"} {...others} />);
}

export default Component;
