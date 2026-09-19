import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5bk4c3ya.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h5bk4c3ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:house-fill"} {...others} />);
}

export default Component;
