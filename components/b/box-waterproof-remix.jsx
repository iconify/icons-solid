import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmlo9qb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fmlo9qb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:box-waterproof-remix"} {...others} />);
}

export default Component;
