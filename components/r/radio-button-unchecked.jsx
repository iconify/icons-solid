import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9iqvmbxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l9iqvmbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:radio-button-unchecked"} {...others} />);
}

export default Component;
