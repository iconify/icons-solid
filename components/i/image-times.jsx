import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4j-itpzn.css';
import '../../css/a/azxq-6bij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4j-itpzn"/><path class="azxq-6bij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-times"} {...others} />);
}

export default Component;
