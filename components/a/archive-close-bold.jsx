import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfo7vac9f.css';
import '../../css/s/s6dl6st5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sfo7vac9f"/><path class="s6dl6st5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-close-bold"} {...others} />);
}

export default Component;
