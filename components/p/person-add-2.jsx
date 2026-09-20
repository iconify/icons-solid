import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzkb3gzut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lzkb3gzut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:person-add-2"} {...others} />);
}

export default Component;
