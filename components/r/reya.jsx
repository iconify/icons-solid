import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vl2pjt7eh {
  fill: var(--svg-color--08f06a, #08f06a);
  d: path("m8.398 14.278l-1.443-2.783V5.807L5.25 3h6.86c4.083 0 6.468 2.068 6.468 5.614c0 2.413-1.131 4.137-3.246 4.999L18.75 21h-3.443l-3.049-6.722zm-1.443-8.47v5.687h5.156c1.991 0 3.172-1.059 3.172-2.88c0-1.798-1.18-2.808-3.172-2.808z");
}
</style><path class="vl2pjt7eh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:reya"} {...others} />);
}

export default Component;
