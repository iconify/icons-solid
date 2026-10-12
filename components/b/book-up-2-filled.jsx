import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ind2jwvlw.css';
import '../../css/v/vdxd2qb6h.css';
import '../../css/u/u3ebn3b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ind2jwvlw"/><path class="vdxd2qb6h"/><path class="u3ebn3b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-up-2-filled"} {...others} />);
}

export default Component;
