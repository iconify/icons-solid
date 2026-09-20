import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxzum9b1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oxzum9b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:data-text-light"} {...others} />);
}

export default Component;
