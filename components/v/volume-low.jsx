import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu9-aziqr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="xu9-aziqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:volume-low"} {...others} />);
}

export default Component;
