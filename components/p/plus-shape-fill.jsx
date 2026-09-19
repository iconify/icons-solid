import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez-3s-a2s.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ez-3s-a2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:plus-shape-fill"} {...others} />);
}

export default Component;
