import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkz6xik2i.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="gkz6xik2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:chevrons-expand-to-lines"} {...others} />);
}

export default Component;
