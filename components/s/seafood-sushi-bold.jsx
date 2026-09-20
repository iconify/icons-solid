import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_smzvq1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_smzvq1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:seafood-sushi-bold"} {...others} />);
}

export default Component;
