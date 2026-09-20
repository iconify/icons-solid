import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2bg46x2r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="a2bg46x2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:diamonds-symbol-solid"} {...others} />);
}

export default Component;
