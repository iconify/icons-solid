import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyl9-3bqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iyl9-3bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:empty-clipboard-remix"} {...others} />);
}

export default Component;
