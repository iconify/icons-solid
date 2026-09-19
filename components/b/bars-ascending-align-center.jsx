import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou84d-bcf.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ou84d-bcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:bars-ascending-align-center"} {...others} />);
}

export default Component;
