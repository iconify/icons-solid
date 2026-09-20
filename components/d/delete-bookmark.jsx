import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7y5wkl1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c7y5wkl1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:delete-bookmark"} {...others} />);
}

export default Component;
