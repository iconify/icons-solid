import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k73k7yq-m.css';
import '../../css/u/u79pk-b6p.css';
import '../../css/k/k74euduoi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k73k7yq-m"/><path class="u79pk-b6p"/><path class="k74euduoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-text-add-bold"} {...others} />);
}

export default Component;
