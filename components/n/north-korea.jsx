import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrscgzb-f.css';
import '../../css/s/st6uysbjd.css';
import '../../css/a/a-wwm5bze.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wrscgzb-f"/><path class="st6uysbjd"/><path class="a-wwm5bze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:north-korea"} {...others} />);
}

export default Component;
