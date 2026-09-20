import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gor4ayb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gor4ayb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:signal-full-remix"} {...others} />);
}

export default Component;
