import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7fphkwmy.css';
import '../../css/e/eytrnn8dy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7fphkwmy"/><path class="eytrnn8dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-theater"} {...others} />);
}

export default Component;
