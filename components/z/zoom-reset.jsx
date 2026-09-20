import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/apd8szp8a.css';
import '../../css/l/lzy79j5js.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="apd8szp8a"/><path class="lzy79j5js"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zoom-reset"} {...others} />);
}

export default Component;
