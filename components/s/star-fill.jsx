import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xugmi0cit.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xugmi0cit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:star-fill"} {...others} />);
}

export default Component;
