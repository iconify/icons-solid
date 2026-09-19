import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6l20hbea.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="o6l20hbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:list-ul"} {...others} />);
}

export default Component;
