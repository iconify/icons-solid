import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f021dkz6d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="f021dkz6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:bold"} {...others} />);
}

export default Component;
