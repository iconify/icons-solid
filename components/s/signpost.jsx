import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4gg4hqmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4gg4hqmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:signpost"} {...others} />);
}

export default Component;
