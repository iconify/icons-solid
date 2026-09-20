import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv1bq6mjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qv1bq6mjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:hourglass-remix"} {...others} />);
}

export default Component;
