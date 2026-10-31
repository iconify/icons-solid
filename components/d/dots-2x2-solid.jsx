import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhg06p-ko.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yhg06p-ko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:dots-2x2-solid"} {...others} />);
}

export default Component;
