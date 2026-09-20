import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogxoes63k.css';
import '../../css/z/zcqz9mbma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogxoes63k"/><path class="zcqz9mbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-move-duotone"} {...others} />);
}

export default Component;
